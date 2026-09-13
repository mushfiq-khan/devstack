import { useEffect, useState } from 'react';

export interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const TechSection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  // Load technology data from public/technologies.json
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error('Error loading JSON data:', err));
  }, []);

  // Add technology with duplicate check
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      alert(`⚠️ "${tech.name}" is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
  };

  // Remove single item
  const handleRemoveFromStack = (id: number) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  // Remove all items
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        {/* Layout: 3 Columns Grid + 1 Column Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Technology Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isSelected = selectedStack.some((item) => item.id === tech.id);

              return (
                <div 
                  key={tech.id} 
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Name & Description */}
                    <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[48px]">
                      {tech.description}
                    </p>

                    {/* Category Chip, Difficulty, Rating */}
                    <div className="flex items-center gap-2 mt-4 text-[11px] text-gray-500">
                      <span className="bg-gray-100 px-2.5 py-1 rounded font-medium text-gray-700">
                        {tech.category}
                      </span>
                      <span className="bg-gray-50 px-2 py-1 rounded border border-gray-100 text-gray-500">
                        {tech.difficulty}
                      </span>
                      <span className="ml-auto font-bold text-amber-500 flex items-center gap-1">
                        ★ {tech.rating}
                      </span>
                    </div>
                  </div>

                  {/* Add to Stack Button */}
                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isSelected}
                    className={`w-full mt-5 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Your Stack Sidebar */}
          <div className="lg:col-span-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24">
            <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
            <p className="text-xs text-gray-400 mb-4">
              {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            {selectedStack.length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-400 border border-dashed border-gray-200 rounded-xl">
                No technologies added yet.
              </div>
            ) : (
              <div className="space-y-3">
                {/* Stack Items (1 Column) */}
                {selectedStack.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-2.5 border border-gray-100 rounded-xl bg-gray-50/50"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                      <div>
                        <h4 className="text-xs font-bold text-gray-800 leading-none">{item.name}</h4>
                        <span className="text-[10px] text-gray-400">{item.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromStack(item.id)}
                      className="text-gray-400 hover:text-rose-500 p-1 cursor-pointer transition-colors"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                {/* Remove All Button */}
                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-4 py-2 border border-rose-200 text-rose-500 hover:bg-rose-50 text-xs font-semibold rounded-xl transition-all cursor-pointer"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechSection;