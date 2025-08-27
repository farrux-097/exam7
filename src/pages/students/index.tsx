import { memo } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import StudentView from "@/components/student-view/StudentView";
import { useMovie } from "@/api/hooks/useStudent";




const Student = () => {
   const { getMovies } = useMovie();
  const { data, isLoading } = getMovies();
    
  
  if (isLoading) return <p>Loading...</p>;
 


  
  return (
    <div>
      <Box>
        <div className="flex justify-between">
          <Title>Student</Title>
          <div className="flex gap-4">
            <select name="" id="" className="outline-0">
              <option value="">Barchasi</option>
              <option value="">Qizlar</option>
              <option value="">Bollar</option>
            </select>
          </div>
        </div>
      </Box>
      <StudentView students={data ?? []} />
    </div>
  );
};

export default memo(Student);
