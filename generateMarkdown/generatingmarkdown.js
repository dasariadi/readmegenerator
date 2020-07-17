// Template of readme
function generateMarkdown(data, githubInfo){
    return `
    # ~~${data.title}~~
    
    ## Description
    
    ${data.description}
    
    ## Table of contents
    
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributors](#Contributors)
    - [Test](#Test)
    - [Repository Link](#Repository)
    - [GitHub Info](#GitHub)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    ${data.license}
    
    ## Contributors
    
    ${data.contributing}
    
    ## Test
    
    ${data.test}
    
    ## Repository
    
    -[Project repo](${data.repo})
    
    ## GitHub
    
    - ${githubInfo.name}
    - [GitHub Profile])(${githubInfo.profile})
    - <${githubInfo.email}>
    
    `;
}

module.exports = generateMarkdown;