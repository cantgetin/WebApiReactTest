using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using WebApiReactTest.Data;
using WebApiReactTest.Models;

class Program
{
    static async System.Threading.Tasks.Task Main(string[] args)
    {
        string baseUrl = "https://api.api-ninjas.com/v1/cars?limit=1000&make=nissan";

        try
        {
            using (HttpClient client = new HttpClient())
            {
                using (var requestMessage =
                new HttpRequestMessage(HttpMethod.Get, baseUrl))
                {
                    requestMessage.Headers.Add("X-Api-Key", "apikey");

                    var request = await client.SendAsync(requestMessage);

                    var data = await request.Content.ReadAsStringAsync();

                    // "make": "toyota", "model": "camry", "transmission": "m", "year": 1993
                    if (data != null)
                    {

                        List<dynamic> carsDynamic = JsonConvert.DeserializeObject<List<dynamic>>(data);
                        List<Car> cars = new List<Car>();

                        int i = 0;
                        foreach (var car in carsDynamic)
                        {
                            cars.Add(new Car
                            {
                                Make = car.make,
                                Model = car.model,
                                Year = car.year,
                                Color = "#" + GetRandomHexColor(6)
                            });
                            i++;
                        }

                        var efc = new DataContext();

                        efc.Cars.AddRange(cars);
                        efc.SaveChanges();

                        Console.WriteLine("data: {0}", data);
                    }
                }
            }

        }
        catch (Exception exception)
        {
            Console.WriteLine("Exception " + exception);
        }

        Console.WriteLine("All done");
        Console.ReadLine();

    }

    static Random random = new Random();
    public static string GetRandomHexColor(int digits)
    {
        byte[] buffer = new byte[digits / 2];
        random.NextBytes(buffer);
        string result = String.Concat(buffer.Select(x => x.ToString("X2")).ToArray());
        if (digits % 2 == 0)
            return result;
        return result + random.Next(16).ToString("X");
    }
}
