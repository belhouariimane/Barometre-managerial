//package fr.univ.angers.info.m2.acdi.bm.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@EnableWebMvc
//public class WebConfig implements WebMvcConfigurer {
//
//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
//		registry.addMapping("/api/**")
//			.allowedOrigins("http://domain2.com")
//			.allowedMethods("PUT", "DELETE")
//			.allowedHeaders("header1", "header2", "header3")
//			.exposedHeaders("header1", "header2")
//			.allowCredentials(false).maxAge(3600);
//	}
//}