import dynamic from "next/dynamic";
import DevProfiler from "@/components/DevProfiler/DevProfiler";

const Services = dynamic(
  () => import('./Services'),
  {
    ssr: true,
    loading: () => <div>Loading services...</div>
  }
);

export default function ServicesClient() {
  return (
    <DevProfiler id="ServicesSection">
      <Services />
    </DevProfiler>
  );
}