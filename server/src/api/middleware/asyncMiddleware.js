const asyncMiddleware = fn => async (req, res, next) => {
  try {
    const result = await fn(req, res, next)

    result.data = await result.data // so we don't need to think about unresolved promises
    if (!result.status) result.status = 200
    if (!result.data) result.data = {}

    return res.status(result.status)
      .send(result.data)
  } catch (e) {
    next(e)
  }
}

export default asyncMiddleware
