const skills = [
    {skill: 'HTML'},
    {skill: 'Learn Express'},
    {skill: 'Buy Milk'}
  ];
  
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill){
  skills.push(skill);
}

function getOne(index) {
    return skills[index];
  }

function getAll() {
    return skills;
}