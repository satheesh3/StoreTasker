
const filterProject = function (id, projects) {
  return projects.find(project => project.id == id)
}
const filterProjectByDay = function (filterVal, projects) {

  switch (filterVal.value) {
    case 0:
      return projects;
    case 1:
      return projects.filter(project => {
        const today = new Date();
        const projectDate = new Date(project.submittedDate);
        return (today.getDay() == projectDate.getDay() && today.getDate() == projectDate.getDate() && today.getFullYear() == projectDate.getFullYear());
      });
    case 2:
      return projects.filter(project => {
        const today = new Date();
        const projectDate = new Date(project.submittedDate);
        return ((projectDate.getDay() >= today.getDay() - 7) && today.getDate() == projectDate.getDate() && today.getFullYear() == projectDate.getFullYear())
      })
    case 3:
      return projects.filter(project => {
        const today = new Date();
        const projectDate = new Date(project.submittedDate);
        return (today.getDate() == projectDate.getDate() && today.getFullYear() == projectDate.getFullYear())
      })
    case 4:
      return projects.filter(project => {
        const today = new Date();
        const projectDate = new Date(project.submittedDate);
        return (today.getFullYear() == projectDate.getFullYear())
      })
  }
}
const timeLineOrder = ["Submitted", "Claimed", "Pending", "In Progress", "Pending Approval", "Completed"];
const isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
}
const filterProperties = [{ name: "All", value: 0 }, { name: "Today", value: 1 }, { name: "This Week", value: 2 }, { name: "This Month", value: 3 }, { name: "This Year", value: 4 }]
export default {
  filterProject,
  timeLineOrder,
  filterProperties,
  isEmpty,
  filterProjectByDay
}