import "./stu.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  LostAndFound,
  Header,
  Campus,
  Canteen,
  Event,
} from "../components/home";

function First() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="renderPage">
        <LostAndFound />
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Campus />
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Canteen />
      </div>
      <div className="mentor">
        <Event />
        &nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
}
export default First;
