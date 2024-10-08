const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));


// const asyncHandler = () => {};
// const asyncHandler = () => {() => {}};
// const asyncHandler = (fn) => async () => {};

// const asyncHandler = (fn) => async (err, req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export { asyncHandler };

