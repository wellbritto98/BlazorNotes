using Blazored.LocalStorage;
using Blazored.Modal;
using Blazored.Toast;
using Microsoft.Extensions.Logging;

namespace BlazorNotesApp
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                });
            builder.Services.AddBlazoredModal();
            builder.Services.AddBlazoredToast();
            builder.Services.AddBlazoredLocalStorage();
            builder.Services.AddMauiBlazorWebView();
            builder.Services.AddScoped<HttpClient>();

#if DEBUG
            builder.Services.AddBlazorWebViewDeveloperTools();
    		builder.Logging.AddDebug();
#endif

            return builder.Build();
        }
    }
}
