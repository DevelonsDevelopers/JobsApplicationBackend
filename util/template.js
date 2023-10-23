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
    <title>Curriculum Vitae</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">
</head>

<style>
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

   

    .cv-container {
        margin-top: 10px;
        max-width: 60%;
        width: 100%;
        padding: 3rem;
        border: 1px solid #e1e1e1;
        border-radius: 20px;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
    }

    .section-heading {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2rem;
        color: #333333;
    }

    .contact-info {
        display: flex;
        font-size: 15px;
        font-weight: 400;
        justify-content: center;
        gap: 20px;
        margin-top: -20px;
        color: #555555;
    }

    .separator {
        margin-top: 2rem;
        border-top: 2px solid #e1e1e1;
    }

    .list-container h4 {
        font-size: 18px;
        font-weight: 500;
        color: #333333;
        padding: 8px 20px;
        border: 1px solid #e1e1e1;
        border-radius: 20px;
    }

    .job-item {
        margin-bottom: 2rem;
    }

    .job-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;
    }

    .job-details h3 {
        font-size: 20px;
        font-weight: 500;
        color: #333333;
    }

    .institute-details h3 {
        font-size: 18px;
        font-weight: 400;
        color: #555555;
    }
    .role-heading{
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 2rem;
        color: #333333;
        letter-spacing: 5px;
    }
    .name-heading {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        color: #333333;
    }
</style>

<body>
    <div class="cv-container">
        <h2 class="name-heading">${name}</h2>
        <h2 class="role-heading">${role}</h2>
        <div class="contact-info">
            <h3>${phone}</h3>
            <h3>${email}</h3>
            <h3>${address}</h3>
        </div>
        <hr class="separator">
        <p>${intro}</p>
        <hr class="separator">
        <h2 class="section-heading">Key Skills</h2>
        <!-- <hr class="separator"> -->
        <div class="institute-details">
            ${skills.map((value) => (
        `<h3>${value.skill}</h3>
            `
    ))}
        </div>
        <hr class="separator">
        <h2 class="section-heading">Employment History</h2>
        <hr class="separator">
        <div>
            ${careers.map((value) => (
        `<div class="job-item">
                <div class="institute-details">
                    <h3>${value.job} <span>|</span> ${value.timeperiod}</h3>
                    <h3>Company: ${value.company}</h3>
                    <h3>Address: ${value.address}</h3>
                    <h3 style="text-align: left;">Phone: ${value.phone}</h3>
                </div>
            </div>`
    ))}
        </div>
        <hr class="separator">
        <h2 class="section-heading">Qualifications</h2>
        <hr class="separator">
        <div class="institute-details">

            ${educations.map((value) => (
        `<h3>${value.qualification} <span>|</span> ${value.timeperiod}</h3>`
    ))}
        </div>

        <hr class="separator">
        <h2 class="section-heading">Training Courses</h2>
        <hr class="separator">
        <div class="institute-details">

            ${courses.map((value) => (
        `<h3>${value.course} <span>|</span> ${value.timeperiod}</h3>`
    ))}
        </div>

        <hr class="separator">
        <h2 class="section-heading">Interests</h2>
        <hr class="separator">
        <div class="institute-details">

            ${interests.map((value) => (
        `<h3>${value.interest}</h3>`
    ))}
        </div>

    </div>
</body>

</html>`
        ;
};

module.exports = {template}
