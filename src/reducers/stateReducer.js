export default function(state, action) {
  switch (action.type) {
    case "foo": {
      return action.data === "Matt" ? "Admin" : action.data.toUpperCase();
    }
    case "setBlogPosts": {
      return action.data;
    }
    default: {
      return state;
    }
  }
}
