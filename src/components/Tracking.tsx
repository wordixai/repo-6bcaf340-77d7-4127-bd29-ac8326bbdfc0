export function Tracking() {
  return (
    <section id="tracking" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Interaction</span> Tracking
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Monitor every AI interaction across your client base with comprehensive analytics and insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="step-number">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Automatic Detection
                  </h3>
                  <p className="text-zinc-300">
                    Our system automatically detects and tracks AI interactions without requiring code modifications
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="step-number">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Client Separation
                  </h3>
                  <p className="text-zinc-300">
                    Each client's data is completely isolated with secure boundaries and access controls
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="step-number">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Real-time Monitoring
                  </h3>
                  <p className="text-zinc-300">
                    Watch interactions happen in real-time with live dashboards and instant alerts
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-gradient rounded-xl p-8">
            <div className="space-y-4">
              <div className="stats-item">
                <span className="text-zinc-300">Active Clients</span>
                <span className="text-white font-semibold">24</span>
              </div>
              <div className="stats-item">
                <span className="text-zinc-300">Today's Interactions</span>
                <span className="text-white font-semibold">1,247</span>
              </div>
              <div className="stats-item">
                <span className="text-zinc-300">Response Time</span>
                <span className="text-white font-semibold">0.3s</span>
              </div>
              <div className="stats-item">
                <span className="text-zinc-300">Success Rate</span>
                <span className="text-white font-semibold">99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}