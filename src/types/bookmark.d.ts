interface IMovieDetails {
  // 电影标题
  Title: string;

  // 发布年份
  Year: string;

  // 评级
  Rated: string;

  // 发布日期
  Released: string;

  // 运行时间
  Runtime: string;

  // 类型（动画、动作、冒险等）
  Genre: string;

  // 导演
  Director: string;

  // 编剧
  Writer: string;

  // 演员
  Actors: string;

  // 剧情简介
  Plot: string;

  // 语言
  Language: string;

  // 国家
  Country: string;

  // 获奖情况
  Awards: string;

  // 海报 URL
  Poster: string;

  // 评分列表
  Ratings: {
    // 评分来源
    Source: string;

    // 评分值
    Value: string;
  }[];

  // Metascore 评分
  Metascore: string;

  // IMDb 评分
  imdbRating: string;

  // IMDb 投票数
  imdbVotes: string;

  // IMDb ID
  imdbID: string;

  // 类型（系列、电影等）
  Type: string;

  // 总季数
  totalSeasons: string;

  // 响应状态
  Response: string;

  Production:string
}

export type IMovie = Pick<IMovieDetails, 'Title' | 'Year' | 'Poster' | 'imdbID' | 'Type'> & { IdMovie: string }

export interface IBookMarkCache {
  bookmark: IMovie[];
}