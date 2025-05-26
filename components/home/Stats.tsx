import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="p-4">
              <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}