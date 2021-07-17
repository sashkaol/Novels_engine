const fs = require('fs');
// const path = require('path');
const first = './project/scripts/first.nov'
const rl = require('readline')

// fs.readFile(first, "utf8", (err, res) => {
//     if (err) return

//     if (res.includes('<герой>')) console.log('там есть герой');
//     if (res.includes('<реплика>')) console.log('и реплики');
//     console.log('HHH', res)
// })

// fs.open(first, (err, fd) => {
//     if (err) return;

//     let buf = new Buffer.alloc(12)

//     console.log(fd);
//     fs.read(fd, buf, 0, 10, 0, (err, read, buffer) => {
//         if (err) return

//         console.log(read, buffer);
//     })
// })

// let data = fs.readFileSync(first).toString().split("\n");
// for (i in data) {
//     console.log(data[i]);
// }

const lread = require('line-reader')
lread.eachLine(first, (line, last) => {
    let hero, words;
    hero = line.slice(0, line.indexOf('::'))
    words = line.slice(line.indexOf('::') + 3)
    console.log(`${hero}: "${words}"`);
})

lread.open(first, (err, reader) => {
    if (err) throw err

    if (reader.hasNextLine()) {
        reader.nextLine((err, line) => {
            if (err) throw err

            console.log(line);
        })
    } else reader.close()
})