function log(level, message, meta) {
  var entry = Object.assign(
    {
      timestamp: new Date().toISOString(),
      level: level,
      message: message
    },
    meta || {}
  );
  console.log(JSON.stringify(entry));
}

function logPayment(fields) {
  var entry = {
    ts: new Date().toISOString(),
    event: fields.event,
    order_id: fields.orderId,
    amount_minor: fields.amountMinor,
    currency: fields.currency || 'KRW',
    status: fields.status
  };
  console.log(JSON.stringify(entry));
}

module.exports = { log: log, logPayment: logPayment };
