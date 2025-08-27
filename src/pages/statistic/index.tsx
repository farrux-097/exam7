import { useMovie } from "@/api/hooks/useStudent";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { UsersRound } from "lucide-react";
import { memo } from "react";

const Statistic = () => {
    const { getMovies } = useMovie();
  const { data, isLoading } = getMovies();

  if (isLoading) return <p>Loading...</p>;

  const students = data ?? [];

  const maleCount = students.filter((item: any) => item.gender === "male").length;
  const femaleCount = students.filter((item: any) => item.gender === "female").length;
  const totalCount = students.length;

  return (
    <div>
      <Box>
        <Title>Statistic</Title>
      </Box>
      <Box>
        <div className="grid md:grid-cols-5 gap-3">
          <div className="border border-slate-200 p-3 rounded-xl relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{totalCount}</h3>
              <p className="text-gray-500">Jami O'quvchilar</p>
            </div>
            <div className="absolute top-0 right-0">
              <UsersRound className="size-20 text-gray-300" />
            </div>
          </div>
          <div className="border border-slate-200 p-3 rounded-xl relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{femaleCount}</h3>
              <p className="text-gray-500">O'g'il bolalar</p>
            </div>
            <div className="absolute top-0 right-0">
              <UsersRound className="size-20 text-gray-300" />
            </div>
          </div>
          <div className="border border-slate-200 p-3 rounded-xl relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{maleCount}</h3>
              <p className="text-gray-500">Qiz bolalar</p>
            </div>
            <div className="absolute top-0 right-0">
              <UsersRound className="size-20 text-gray-300" />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default memo(Statistic);
