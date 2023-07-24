const {format} = require('date-fns')
const {v4: uuid4} = require('uuid')
const fs = require('fs')
const fsPromise = require('fs').promises;
const path = require('path')

const logEvents = async (message) => {
    const dateTime = `${format(new Date(),  'yyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid4()}\t${message}\n`
    console.log(logItem)
    //testing
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromise.mkdir(path.join(__dirname, 'logs'))
        }
         await fsPromise.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
    } catch(err){
        console.log("error occured!", err)
    }
}
console.log(format(new Date(), 'yyyMMdd\tHH:mm:ss'))

module.exports = logEvents