using Chapter7.Filters;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SampleAPI.Filters;
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
                .AddControllers(config =>
                {
                    config.Filters.Add(new CustomActionFilterAsync());
                    //config.Filters.Add(new CustomExceptionAttribute());
                }
                );

            services.AddSingleton<CustomActionFilter>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));


            app.UseRouting();
            app.UseEndpoints(x => { x.MapControllers(); });

        }
    }
}


    
