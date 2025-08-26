import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { REGIONS } from "@/static";
import { memo, useState,  } from "react";



const CreateStudent = () => {
    const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  return (
    <div>
      <Box>
        <Title>Manage Student</Title>
      </Box>
      <Box>
        <div className="max-w-[600px] w-full">
          <Title className="mb-3">Create</Title>
          <form action="">
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
              name=""
              id=""
            >
              <option value="" hidden>
                Gender
              </option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
            <select
              className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
              name=""
              id=""
            >
              <option value="" hidden>
                Region
              </option>
              
              {
                REGIONS?.map((item:string) => (
                    <option value="">
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
