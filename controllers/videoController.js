import { videos } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  console.log(req.path);

  const a = req.query.term; // ES6 이전
  //ES6 이후
  const {
    query: { term: b }, // req.query.term에 변수명 할당 변수명을 searchingBy로 할당하면    res.render("search", { pageTitle: "Search", searchingBy }); 처리가능 .
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy: b, videos });
};
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
