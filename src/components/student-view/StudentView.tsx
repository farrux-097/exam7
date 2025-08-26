import { memo } from "react";
import Box from "../ui/Box";
import { SquarePen, Trash } from "lucide-react";

const StudentView = () => {
  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        <div className="border border-slate-200 p-4 rounded-xl text-center">
          <div className="relative">
            <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
              <span className="text-4xl font-bold text-slate-400">L</span>
            </div>
            <div className="absolute top-0 right-0 flex flex-col gap-3">
              <button className="cursor-pointer">
                <Trash className="size-5 text-red-500"/>
              </button>
              <button className="cursor-pointer">
                <SquarePen className="size-5 text-green-600" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Laylo Ahmedova</h3>
            <p>Tashkent</p>
          </div>
        </div>
        <div className="border border-slate-200 p-4 rounded-xl text-center">
          <div className="relative">
            <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
              <span className="text-4xl font-bold text-slate-400">A</span>
            </div>
            <div className="absolute top-0 right-0 flex flex-col gap-3">
              <button className="cursor-pointer">
                <Trash className="size-5 text-red-500"/>
              </button>
              <button className="cursor-pointer">
                <SquarePen className="size-5 text-green-600" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Akmal Azimov</h3>
            <p>Samarkand</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default memo(StudentView);
