
export default function (
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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
</head>

<style>
    * {
        font-family: 'Poppins', sans-serif;
    }

    h2 {
        font-weight: 400;
    }

    h3 {
        font-weight: 400;
    }

    .box {
        padding: 5rem;
        border: 1px solid black;
        margin: 80px;
        border-radius: 20px;
    }

    @media only screen and (max-width: 600px) {
        .box {
            padding: 10px;
            margin: 0;
        }
        h3{
            font-size: 12px;
        }
        h2{
            font-size: 12px;
        }
        p{
            font-size: 11px;
            
        }
        h4{
            font-size: 12px;
            font-weight: 400;
        }

    }
</style>

<body class="box" style="">

    <center>
        <h2>${name}</h2>
        <h2 >${address}</h2>
        <div style="display: flex;justify-content: center; gap: 20px;margin-top: -20px;">
            <h3>${phone}</h3>
            <h3>${email}</h3>
        </div>
        <hr>
        <h2>${role}</h2>
        <hr>
    </center>
    <p >${intro}</p>
    <hr>
    <h2 style="text-align: center;">Key skills</h2>
    <hr>
    <center>
        <div style="grid-template-columns: repeat(3,minmax(0, 1fr)); display: grid;">
        ${skills.map((value) => (
        <h4>${value.skill}</h4>
    ))}
        </div>
    </center>
    <hr>
    <h2 style="text-align: center;">Employment History</h2>
    <hr>
    <div>
    ${careers.map((value) => (
        <div>
            <div style="display: flex;gap: 20px;">
                <h3>${value.job}</h3>
                <h3>|</h3>
                <h3>${value.timeperiod}</h3>
            </div>
            <div style="display: flex;margin-top: -20px;gap: 20px;">
                <h3>Company</h3>
                <h3>:</h3>
                <h3>${value.company}</h3>
            </div>
            <div style="display: flex;margin-top: -20px;gap: 20px;">
                <h3>Address</h3>
                <h3>:</h3>
                <h3>${value.address}</h3>
            </div>
            <h3 style="text-align: right;">Phone: ${value.phone}</h3>
        </div>
    ))}
        <hr>
    </div>
    <h2 style="text-align: center;">Qualification</h2>
    <hr>
    <div>
        ${educations.map((value) => (
        <div>
            <div style="display: flex;gap: 20px;">
                <h3>${value.qualification}</h3>
                <h3>|</h3>
                <h3>${value.timeperiod}</h3>
            </div>

            <h3 style="text-align: right;">${value.institute}</h3>
        </div>
    ))}
        <hr>
    </div>
    <h2 style="text-align: center;">Training Courses</h2>
    <hr>
    <div>
    ${courses.map((value) => (
        <div>
            <div style="display: flex;gap: 20px;">
                <h3>${value.course}</h3>
                <h3>|</h3>
                <h3>${value.timeperiod}</h3>
            </div>

            <h3 style="text-align: right;">${value.institute}</h3>
        </div>
    ))}
        
        <hr>
    </div>
    <h2 style="text-align: center;">Interest</h2>
    <hr>
    <center>
        <div style="grid-template-columns: repeat(3,minmax(0, 1fr)); display: grid;">
        ${interests.map((value) => (
        <h4>${value.interest}</h4>
    ))}
            

        </div>
    </center>



</body>

</html>`
        ;
};
