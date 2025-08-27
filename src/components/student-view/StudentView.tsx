import { memo } from "react";
import Box from "../ui/Box";
import { SquarePen, Trash } from "lucide-react";
import { useMovie } from "@/api/hooks/useStudent";


type Student = {
  id: string | number;
  first_name: string;
  last_name: string;
  gender: string;
  region: string;
};
type Props = {
  students: Student[];
};

const StudentView = ({ students }: Props) => {

 const { deleteStudent} = useMovie();

  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {students?.map((student: any) => (
          <div key={student.id} className="border border-slate-200 p-4 rounded-xl text-center">
            <div className="relative">
              <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
                <span className="text-4xl font-bold text-slate-400">
                {student?.first_name.length > 0 ? student.first_name[0] : "?"}
                </span>
              </div>
              <div className="absolute top-0 right-0 flex flex-col gap-3">
                <button onClick={() => deleteStudent.mutate(student.id)}className="cursor-pointer">
                  <Trash className="size-5 text-red-500" />
                </button>
                <button className="cursor-pointer">
                  <SquarePen className="size-5 text-green-600" />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex  justify-center gap-2">
                  <h3 className="font-bold">{student.first_name}</h3>
                  <h3 className="font-bold">{student.last_name}</h3>
              </div>
              <p className="font-semibold">{student.gender}</p>
              <p>{student.region}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default memo(StudentView);
