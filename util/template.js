function template(
    {
        name,
        address,
        phone,
        email,
        role,
        intro,
        skills,
        careers,
        educations,
        courses,
        interests
    }) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;1,100;1,200;1,300&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
    }
</style>

<body style="padding: 4%;">
    <center>
        <h5>${name} </h5>
        <div style="display: flex;margin-top: -20px;margin-left: 27%;">
            <h5>${phone}</h5>
            <h5 style="margin-left: 9%;">${email}</h5>
        </div>
    </center>
    <h5>Personal Statment :</h5>
    <p>${intro}</p>
    <h5>Work Experience :</h5>
    ${careers.map((value) => (
        ` <div>
        <div style="display: flex; gap: 20px;">
            <p>${value.job}</p>
            <p style="margin-left: 4%;">|</p>
            <p style="margin-left: 4%;">${value.timeperiod}</p>
        </div>
        <p style="text-align: right;">${value.address}</p>
    </div>`
    )).join('')}
    <div style="display: flex; padding: 7%; margin-left: 10%;">
        <div>
            <h5 style="text-align: left;">Skills</h5>
            ${skills.map((value) => (
        ` <li style="text-align: left;">${value.skill}</li>`
    )).join('')}


        </div>
        <div style="margin-left: 14%;">
            <h5 style="text-align: right;">Interest</h5>
            ${interests.map((value) => (
        <li style="text-align: left;">${value.interest}</li>
    )).join('')}

        </div>
    </div>
    <div>
        <h5>Education</h5>
        ${educations.map((value) => (
        `<div>
            <div style="display: flex; ">
                <p>${value.qualification}</p>
                <p style="margin-left: 4%;">|</p>
                <p style="margin-left: 4%;">${value.timeperiod}</p>
            </div>
            <p style="text-align: right;">${value.address}</p>
        </div>`
    )).join('')}
    </div>

</body>

</html>`
        ;
};

module.exports = {template}
