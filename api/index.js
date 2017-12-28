'use strict'

/*
  /TimeSlot
  -- startDate: date
  -- duration: duration
  -- endDate()
  /Session
  -- game
  -- proposer: player
  -- sessionType: [open|closed]
  -- restrictions? (restricciones de nivel/clase/rol)
  -- proposedTimeSlots: TimeSlot[]
  -- confirmed: TimeSlot
  -- played: true | false
  -- attendees: [{
  ---¬ player
  ---¬ roles: role[] ('player' | 'gameMaster' | ...)
  ---¬ preferredTimeSlots: {timeSlot, preference}
  -- }]
  /Player
  -- email: string
  -- user: User
  -- displayName: string
  -- name: string
  -- characters: Character[]
  -- sessions: Session[]
  /login
*/

/*
  GET /sessions
  POST /sessions
  GET /sessions/:id
  GET /sessions?from=date&to=date
  PATCH /sessions/:id

  GET /players
  POST /players
  GET /players/:id
  PATCH /players/:id
  GET /players/:id/sessions

  POST /login
*/

const Boom = require('boom')
const Koa = require('koa')
const Router = require('koa-router')

const playerFixtures = require('./test/fixtures/players.json')

const app = new Koa()
module.exports = app

const router = Router()

router.get('/players', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.type = 'application/json'
  ctx.response.body = playerFixtures
  await next()
})

// router.post('/players')
router.get('/players/:id', async (ctx, next) => {
  const player = playerFixtures.find(p => p.id === ctx.params.id)
  if (player) {
    ctx.response.status = 200
    ctx.response.type = 'json'
    ctx.response.body = player
  } else {
    ctx.response.status = 404
  }
})
// router.patch('/players/:id')
// router.get('/players/:id/sessions')

app.use(router.routes())
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => Boom.notImplemented(),
  methodNotAllowed: () => Boom.methodNotAllowed()
}))

if (!module.parent) app.listen(5000)
