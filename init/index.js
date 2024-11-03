const mongoose=require("mongoose");
const userpersonal=require("../models/personals.js");

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/project');
}

main()
.then((res)=>
{
    console.log("connected");
})
.catch((err)=>
{
    console.log(err);
});


async function addData()
{
    await userpersonal.deleteMany({});
    await userpersonal.insertMany([
        {
            aadharnumber:123456789012,
            tenthMarks:9.8,
            twelthMarks:970,
            caste:"obc"
        },
        {
            aadharnumber:123450987690,
            tenthMarks:9.3,
            twelthMarks:880,
            caste:"obc"
        },
        {
            aadharnumber:120987654321,
            tenthMarks:8.8,
            twelthMarks:880,
            caste:"obc"
        },
        {
            aadharnumber:561234567890,
            tenthMarks:9.8,
            twelthMarks:970,
            caste:"st"
        },
        {
            aadharnumber:298765432112,
            tenthMarks:9.8,
            twelthMarks:970,
            caste:"sc"
        }

    ]);
    console.log("data Done")
}

addData();