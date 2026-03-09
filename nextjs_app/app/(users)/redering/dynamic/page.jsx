import { db } from "../../../../config/db.jsx";
import { cache } from "react";

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <>
      <DoctorLists doctors={doctors} />
    </>
  );
};

export default DynamicPage;

const DoctorLists = async ({ doctors }) => {
  const doctors = await getAllDoctors();
  return (
    <>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}>{doctor.first_name}</li>;
        })}
      </ul>
    </>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Dynamic doctors");

  return doctors;
});
