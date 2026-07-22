import React, { useState } from "react";

const courses = [
  "B.Tech",
  "M.Tech",
  "MBA",
  "BBA",
  "BCA",
  "MCA",
  "Pharmacy",
  "Education",
  "Other",
];

const LeadCaptureForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid mobile number";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.course) {
      newErrors.course = "Select course";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (onSubmit) {
      onSubmit(formData);
    }

    alert("Lead Submitted Successfully ✅");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      course: "",
    });
  };

  return (
    <div className="border-t border-green-100 bg-white p-4">
      <h3
        className="font-bold text-lg mb-3"
        style={{
          color: "#3a6d33",
        }}
      >
        🎓 Admission Enquiry
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        {/* Name */}

        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              text-sm
              outline-none
            "
          />

          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Mobile */}

        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              text-sm
              outline-none
            "
          />

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mobile}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              text-sm
              outline-none
            "
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Course */}

        <div>
          <select
            value={formData.course}
            onChange={(e) =>
              setFormData({
                ...formData,
                course: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              text-sm
              outline-none
            "
          >
            <option value="">
              Select Course
            </option>

            {courses.map((course) => (
              <option
                key={course}
                value={course}
              >
                {course}
              </option>
            ))}
          </select>

          {errors.course && (
            <p className="text-red-500 text-xs mt-1">
              {errors.course}
            </p>
          )}
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="
            w-full
            py-3
            rounded-xl
            text-white
            font-semibold
            transition-all
            duration-300
            hover:scale-[1.02]
          "
          style={{
            background:
              "linear-gradient(135deg,#3a6d33,#578B07)",
          }}
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;