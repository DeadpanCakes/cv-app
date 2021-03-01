const JobFactory = (key, companyName, position, startDate, endDate, desc) => ({
  key,
  companyName,
  position,
  startDate,
  endDate,
  desc,
  get duration() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `${new Date(this.startDate).toLocaleString(
      "en-US",
      options
    )} To ${new Date(this.endDate).toLocaleString("en-US", options)}`;
  },
});

export default JobFactory;
