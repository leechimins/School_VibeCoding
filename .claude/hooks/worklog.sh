#!/bin/bash
input=$(cat)

printf '%s' "$input" | python -c "
import json, os, re, sys
from datetime import datetime

log_path = os.path.join(os.environ['CLAUDE_PROJECT_DIR'], '.claude', 'worklog.txt')
timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

try:
    data = json.loads(sys.stdin.buffer.read().decode('utf-8'))
    text = (data.get('last_assistant_message') or '').strip()
    if not text:
        raise ValueError('empty last_assistant_message')
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)
    text = re.sub(r'[\`*#_]', '', text)
    text = ' '.join(text.split())
    LIMIT = 35
    if len(text) > LIMIT:
        cut = text[:LIMIT]
        last_space = cut.rfind(' ')
        text = cut[:last_space] if last_space > 0 else cut
    line = f'{timestamp} ✅ {text}'
except Exception:
    line = f'{timestamp} ⚠️ 훅 실패'

with open(log_path, 'a', encoding='utf-8', newline='\n') as f:
    f.write(line + '\n')
"

if [ $? -ne 0 ]; then
    printf '%s \xe2\x9a\xa0\xef\xb8\x8f 훅 실패\n' "$(date '+%Y-%m-%d %H:%M:%S')" >> "$CLAUDE_PROJECT_DIR/.claude/worklog.txt"
fi

exit 0
