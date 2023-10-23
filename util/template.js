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
</head>

<body style="font-family: 'Poppins', sans-serif; background-color: #f4f4f4; display: flex; justify-content: center; align-items: center; min-height: 100vh;">

    <div class="cv-container" style="margin-top: 10px; max-width: 60%; width: 100%; padding: 3rem; border: 1px solid #e1e1e1; border-radius: 20px; background-color: #ffffff; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); margin-bottom: 10px;">
        <h2 class="name-heading" style="text-align: center; font-size: 20px; font-weight: 600; color: #333333;">Elon Musk</h2>
        <h2 class="role-heading" style="text-align: center; font-size: 18px; font-weight: 400; margin-bottom: 2rem; color: #333333; letter-spacing: 5px;">CEO of Tesla</h2>
        <div class="contact-info" style="display: flex; font-size: 15px; font-weight: 400; justify-content: center; gap: 20px; margin-top: -20px; color: #555555;">
            <h3>${phone}</h3>
            <h3>${email}</h3>
            <h3>${address}</h3>
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <p>${intro}</p>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h2 class="section-heading" style="text-align: center; font-size: 20px; font-weight: 600; margin-bottom: 2rem; color: #333333;">Key Skills</h2>
        <div class="institute-details">
            ${skills.map((value) => (
        `<h3>${value.skill}</h3>`
    ))}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h2 class="section-heading" style="text-align: center; font-size: 20px; font-weight: 600; margin-bottom: 2rem; color: #333333;">Employment History</h2>
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
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h2 class="section-heading" style="text-align: center; font-size: 20px; font-weight: 600; margin-bottom: 2rem; color: #333333;">Qualifications</h2>
        <div class="institute-details">
            ${educations.map((value) => (
        `<h3>${value.qualification} <span>|</span> ${value.timeperiod}</h3>`
    ))}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h2 class="section-heading" style="text-align: center; font-size: 20px; font-weight: 600; margin-bottom: 2rem; color: #333333;">Training Courses</h2>
        <div class="institute-details">
            ${courses.map((value) => (
        `<h3>${value.course} <span>|</span> ${value.timeperiod}</h3>`
    ))}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h2 class="section-heading" style="text-align: center; font-size: 20px; font-weight: 600; margin-bottom: 2rem; color: #333333;">Interests</h2>
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
