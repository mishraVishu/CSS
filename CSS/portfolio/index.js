const skillSection = document.querySelector('#skills');
const experienceSection = document.querySelector('#experience');
const educationSection = document.querySelector('#education');
const skill_link = document.querySelector('#skill-link');
const exp_link = document.querySelector('#exp-link');
const edu_link =  document.querySelector('#edu-link');
console.log(skillSection, educationSection, experienceSection,skill_link,edu_link,exp_link);

function getSkillSection() {
    skillSection.classList.add('show');
    skillSection.classList.remove('hide');
    experienceSection.classList.add('hide');
    educationSection.classList.add('hide');
    skill_link.classList.add('border');
    exp_link.classList.remove('border');
    edu_link.classList.remove('border');
}

function getExpSection() {
    skillSection.classList.add('hide');
    experienceSection.classList.add('show');
    experienceSection.classList.remove('hide');
    educationSection.classList.add('hide');
    exp_link.classList.add('border');
    skill_link.classList.remove('border');
    edu_link.classList.remove('border');
}

function getEduSection() {
    skillSection.classList.add('hide');
    experienceSection.classList.add('hide');
    educationSection.classList.add('show');
    educationSection.classList.remove('hide');
    edu_link.classList.add('border');
    skill_link.classList.remove('border');
    exp_link.classList.remove('border');
}