package fr.univ.angers.info.m2.acdi.bm.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("GET", "POST","PUT", "DELETE","OPTIONS")
			.allowedHeaders("DNT", "User-Agent", "X-Requested-With","If-Modified-Since","Cache-Control","Content-Type","Range")
			.exposedHeaders("Content-Length", "Content-Range")
			//.allowCredentials(false)
			.maxAge(3600);
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

	    registry
	            .addResourceHandler("/api/swagger-ui.html")
	            .addResourceLocations("classpath:/META-INF/resources/");

	    registry
	            .addResourceHandler("/webjars/**")
	            .addResourceLocations("classpath:/META-INF/resources/webjars/");
	}
}