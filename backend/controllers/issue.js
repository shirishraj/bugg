const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Issue = require("../models/Issue");

//@desc     Get all Issues
//Method    GET /api/Issues
exports.getIssues = asyncHandler(async (req, res, next) => {
  const issue = await Issue.find();
  if (!issue) {
    return next(new ErrorResponse("No data", 404));
  }
  res.status(200).json({
    success: true,
    data: issue,
  });
});

//@desc     Get one Issue
//Method    GET /api/Issues/:id
exports.getIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findById(req.params.id);
  if (!issue) {
    return next(new ErrorResponse(`issue with id of ${req.params.id}`, 404));
  }
  res.status(200).json({
    success: true,
    data: issue,
  });
});
//@desc     create a Issue
//Method    POST /api/Issues
exports.createIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.create(req.body);
  console.log(req.body);
  res.status(200).json({
    success: true,
    data: issue,
  });
});
//@desc     update one Issue
//Method    PUT /api/Issues/:id
exports.updateIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!issue) {
    return next(new ErrorResponse(`issue with id of ${req.params.id}`, 404));
  }
  res.status(200).json({
    success: true,
    data: issue,
  });
});

//@desc     delete one Issue
//Method    DELETE /api/Issues/:id
exports.deleteIssue = asyncHandler(async (req, res, next) => {
  const issue = await Issue.findByIdAndDelete(req.params.id);

  if (!issue) {
    return next(new ErrorResponse(`user with id of ${req.params.id}`, 404));
  }
  res.status(200).json({
    success: true,
    data: {},
  });
});
