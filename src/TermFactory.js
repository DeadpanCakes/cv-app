const TermFactory = (key, institution, startDate, endDate) => ({
  key,
  institution,
  startDate,
  endDate,
  get Duration() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `${new Date(this.startDate).toLocaleString(
      "en-US",
      options
    )} To ${new Date(this.endDate).toLocaleString("en-US", options)}`;
  },
});

export default TermFactory;
