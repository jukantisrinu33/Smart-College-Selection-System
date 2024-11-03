const joi=require("joi");

module.exports.listingSchema=joi.object({
    aadharnumber:joi.number().min(111111111111).max(999999999999).required(),
    tenthMarks:joi.number().required,
    twelthMarks:joi.number().required,
    caste:joi.string().required,
    jeeScore:joi.number().required()
});