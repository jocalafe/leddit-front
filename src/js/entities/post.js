export default function post(postTitle, postLink, postDescription, postAuthor) {
  const title = postTitle;
  const link = postLink || '';
  let description = postDescription || '';
  const author = postAuthor;
  return {
    get title() {
      return title;
    },
    get link() {
      return link;
    },
    get description() {
      return description;
    },
    get author() {
      return author;
    },
    setDescription(newDescription) {
      description = newDescription;
    }
  };
}
