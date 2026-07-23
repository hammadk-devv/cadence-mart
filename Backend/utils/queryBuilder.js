class QueryBuilder {
  constructor(modelQuery, queryString) {
    this.modelQuery = modelQuery;
    this.queryString = queryString;
  }

  search(searchFields = []) {
    if (this.queryString.search && searchFields.length > 0) {
      const regex = new RegExp(this.queryString.search, "i");
      const searchConditions = searchFields.map((field) => ({
        [field]: regex,
      }));
      this.modelQuery = this.modelQuery.find({ $or: searchConditions });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields", "search"];
    excludedFields.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj);
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.modelQuery = this.modelQuery.sort(sortBy);
    } else {
      this.modelQuery = this.modelQuery.sort("-createdAt");
    }
    return this;
  }

  paginate(skip, limit) {
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  async execute() {
    return await this.modelQuery;
  }
}

export default QueryBuilder;
