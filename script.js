import http from "k6/http";
import { check, sleep } from "k6";

const maxId = 1000;
const minId  = 1;

export let options = {
  vus: 10,
  duration: "180s"
};

export default function () {
  const courseId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  const res = http.get(`http://localhost:3000/courses/${courseId}`);
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200
  });
}
