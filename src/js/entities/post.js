export default function post(title, link, description) {
  const postTitle = title;
  const postLink = link || '';
  let postDescription = description || '';
  return {
    get title() {
      return title;
    },
    get link() {
      return link;
    },
    get description() {
      return description;
    }
  };
}
