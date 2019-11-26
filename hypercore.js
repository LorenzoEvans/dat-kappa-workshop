const hypercore = require('hypercore')

// Hypercore is an append only data structure

const feed = hypercore('./single-chat-feed', {
    valueEncoding: 'json'
});

feed.append({
    type: 'chat-message',
    nickname: 'cat-lover',
    text: 'hello world',
    timestamp: new Date().toISOString(),
}, function (err, seq) {
    if (err) throw err;
    console.log('Data was appended as entry #' + seq)
})