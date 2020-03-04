using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SampleAPI.CustomRouting;
using SampleAPI.Repositories;

namespace SampleAPI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddSingleton<IOrderRepository, MemoryOrderRepository>()
                .AddControllers();


            //1° Configure the routing constraints
            //services.Configure<RouteOptions>(options => {
            //    options.ConstraintMap.Add("currency", typeof(CurrencyConstraint));
            //});


        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseEndpoints(x => { x.MapControllers(); });

            //1° Configure the routing constraints
            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllerRoute("default", "{controller}/{action}/{currency}");
            //});

        }
    }
}
