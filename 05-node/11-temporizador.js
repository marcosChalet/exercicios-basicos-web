const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 4', function () {
  console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.daysOsWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log('Executando tarefa 2!', new Date().getSeconds())
})
