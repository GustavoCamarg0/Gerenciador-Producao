import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const description = searchParams.get("description");
  const unitPrice = searchParams.get("unitPrice");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da produção</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-slate-600">Descrição</th>
                <th className="border-b p-2 text-slate-600">Preço Unitário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2 text-slate-600">{description}</td>
                <td className="border-b p-2 text-slate-600">R${unitPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
