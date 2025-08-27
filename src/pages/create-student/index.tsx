import { api } from "@/api";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { REGIONS } from "@/static";
import { useMutation } from "@tanstack/react-query";
import { memo, useState,  } from "react";



const CreateStudent = () => {
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");


    const createStudent = useMutation({
    mutationFn: (newStudent: {
      first_name: string;
      last_name: string;
      gender: string;
      region: string;
    }) =>
       api
       .post("exam", newStudent), 
    
    onSuccess: () => { setFirst("");setLast("");setGender("");setRegion("");},

  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStudent.mutate({
      first_name: first,
      last_name: last,
      gender,
      region,
    });
  };
  return (
    <div>
      <Box>
        <Title>Manage Student</Title>
      </Box>
      <Box>
        <div className="max-w-[600px] w-full">
          <Title className="mb-3">Create</Title>
          <form onSubmit={handleSubmit} action="">
            <input 
            value={first}
              type="text"
              onChange={(e) => setFirst(e.target.value)}
              className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
              placeholder="first name"
            />
            <input
            value={last}
              type="text"
              onChange={(e) => setLast(e.target.value)}
              className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
              placeholder="last name"
            />
            <select
              className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
               value={gender}
              onChange={(e) => setGender(e.target.value)}
              name=""
              id=""
            >
              <option  value="" hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
              name=""
              id=""
            >
              <option value="" hidden>
                Region
              </option>
              
              {
                REGIONS?.map((item:string , index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                    
                  
                ))
              }
             
            </select>
            <button className="w-full rounded-xl h-10 mb-3 bg-blue-500 text-white">
              Submit
            </button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default memo(CreateStudent);
