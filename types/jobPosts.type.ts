interface IJobPost {
  _id?: string,
  coverImage?: string,
  companyLogo?: string,
  companyName: string,
  title: string,
  content: string,
  contractType: string,
  localization: string,
  publishedAt?: string
}