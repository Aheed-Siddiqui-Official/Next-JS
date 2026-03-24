"use server";

// import { db } from "../../../config/db/jsx";

export const contactAction = async (previousState, formData) => {
  //   const fullName = formData.get("fullName");
  //   const email = formData.get("email");
  //   const message = formData.get("message");

  // array of arrays
  const { fullName, email, message } = Object.fromEntries(formData.entries());

  console.log(fullName, email, message);

  await db.execute(
    `insert into contact_form (full_name, email, message) values (?, ?, ?)`,
    [fullName, email, message],
  );
};
