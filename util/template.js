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
        <h2>${name} </h2>
        <div style="display: flex; gap: 20px;margin-top: -20px;justify-content: center;">
            <h4>${phone}</h4>
            <h4>${email}</h4>
        </div>
    </center>
    <h4>Personal Statment :</h4>
    <p>${intro}</p>
    <h4>Work Experience :</h4>
    ${careers.map((value) => (
        ` <div>
        <div style="display: flex; gap: 20px;">
            <p>${value.job}</p>
            <p>|</p>
            <p>${value.timeperiod}</p>
        </div>
        <p>${value.address}</p>
    </div> `
    ))}
    <div style="display: flex; justify-content:space-between; padding: 7%;">
        <div>
            <h4 style="text-align: left;">Skills</h4>
            ${skills.map((value) => (
        ` <li style="text-align: right;">${value.skill}</li> `
    ))}


        </div>
        <div>
            <h4 style="text-align: right;">Interest</h4>
            ${interests.map((value) => (
        ` <li style="text-align: left;">${value.interest}</li> `
    ))}

        </div>
    </div>
    <div>
        <h4>Education</h4>
        ${educations.map((value) => (
        ` <div>
            <div style="display: flex; gap: 20px;">
                <p>${value.qualification}</p>
                <p>|</p>
                <p>${value.timeperiod}</p>
            </div>
            <p style="text-align: right;">${value.address}</p>
        </div> `
    ))}
    </div>

</body>

</html>`
        ;
};

module.exports = {template}
