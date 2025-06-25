import data from "../data/pages.json";

interface FilterParams {
  parent?: string;
  group?: string;
}

export function getProjects({ parent, group }: FilterParams = {}) {
  const allProjects = data.pages.experience.projects;
  if (parent === "all") {
    return Object.entries(allProjects).map(([key, project]: any) => ({
      key,
      title: key,
      desc: project.desc,
      img: require(`../data/imgs/${project.img}`),
      links: project.links || [],
    }));
  }

  return Object.entries(allProjects)
    .filter(([_, project]: any) => {
      if (project.groups === undefined) {
        console.log("Filtering project:", project);
      }
      const parentMatch = parent ? project.parent === parent : true;
      const groupMatch = group ? project.groups?.includes(group) : true;
      return parentMatch && groupMatch && project.hidden !== 1;
    })
    .map(([key, project]: any) => ({
      key,
      title: key,
      desc: project.desc,
      img: require(`../data/imgs/${project.img}`),
      links: project.links || [],
    }));
}
